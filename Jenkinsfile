pipeline {
    agent any

    tools{
        maven "M3"
    }

    stages {
        stage("Preparation") {
            steps {
                echo "📦 Préparation de l'environnement..."
                sh "mvn clean"
            }
        }

        stage("Run JMeter Tests") {
            steps {
                echo "🚀 Exécution des tests JMeter..."
                // Exemple : sh "mvn verify" ou exécution de ton script JMeter ici
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
