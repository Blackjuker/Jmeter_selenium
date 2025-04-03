pipeline {
    agent {
        docker {
            image 'alpine/jmeter'
            args '-v $PWD:/tests' // pour monter ton répertoire si besoin
        }
    }

    environment {
        JMETER_TEST_FILE = "tests/SQL.jmx"
        REPORT_DIR = "jmeter-report"
    }

    stages {
        stage("Préparation") {
            steps {
                echo "📦 Nettoyage du projet"
                sh "mkdir -p ${REPORT_DIR}"
            }
        }

        stage("Run JMeter Tests") {
            steps {
                echo "🚀 Exécution des tests JMeter..."
                sh """
                    jmeter -n \\
                           -t ${JMETER_TEST_FILE} 
                """
            }
        }

        stage("Archive Report") {
            steps {
                echo "🗂 Archivage du rapport JMeter..."
                archiveArtifacts artifacts: "${REPORT_DIR}/**", fingerprint: true
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: "${REPORT_DIR}/html",
                    reportFiles: 'index.html',
                    reportName: "JMeter Report"
                ])
            }
        }
    }

    post {
        always {
            echo "✅ Pipeline terminée"
        }
        success {
            echo "🎉 Tests JMeter exécutés avec succès"
        }
        failure {
            echo "❌ Échec lors de l'exécution des tests JMeter"
        }
    }
}
