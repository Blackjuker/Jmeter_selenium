pipeline {
    agent {
        label "node" // à adapter selon ton agent
    }

    environment {
        JMETER_HOME = "/chemin/vers/apache-jmeter/bin" // adapte selon ton serveur
        JMETER_TEST_FILE = "tests/sql.jmx" // ton fichier JMX
        REPORT_DIR = "jmeter-report"
    }

    stages {
        stage("Preparation") {
            steps {
                echo "📦 Préparation de l'environnement..."
                sh "mkdir -p ${REPORT_DIR}"
            }
        }

        stage("Run JMeter Tests") {
            steps {
                echo "🚀 Exécution des tests JMeter..."
                sh "${JMETER_HOME}/jmeter -n -t ${JMETER_TEST_FILE} -l ${REPORT_DIR}/result.jtl -e -o ${REPORT_DIR}/html"
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
            echo "✅ Pipeline terminée (post always)"
        }
        success {
            echo "🎉 Tests JMeter exécutés avec succès"
        }
        failure {
            echo "❌ Échec lors de l'exécution des tests JMeter"
        }
    }
}
