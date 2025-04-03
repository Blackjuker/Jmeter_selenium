pipeline {
    agent {
        docker {
            image 'maven:3.8.6-openjdk-11'
            args '-u root:root'
        }
    }

    environment {
        REPORT_DIR = "src/target/jmeter/reports" // Généré automatiquement par le plugin Maven JMeter
    }

    stages {
        stage('Build Project (sans tests unitaires)') {
            steps {
                echo '🛠️ Compilation du projet (tests unitaires ignorés)'
                sh 'mvn clean install'
            }
        }

        stage('Configurer JMeter via Maven') {
            steps {
                echo '⚙️ Configuration du plugin JMeter'
                sh 'mvn jmeter:configure'
            }
        }

        stage('Exécuter les tests JMeter') {
            steps {
                echo '🚀 Exécution des tests JMeter via Maven'
                sh 'mvn jmeter:jmeter'
            }
        }

        stage("Archiver le rapport JMeter") {
            steps {
                echo "🗂 Archivage du rapport JMeter HTML"
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
