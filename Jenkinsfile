pipeline {
    agent {
        docker {
            image 'maven:3.8.6-openjdk-11'
            args '-u root:root'
        }
    }

    options {
        skipDefaultCheckout(true)
    }

    environment {
        PROJECT_DIR = "jmeter-selenium"
        JMETER_FILE = "src/test/jmeter/SQL.jmx"
        REPORT_DIR = "target/jmeter/reports"
    }

    stages {
        stage('Checkout & Cleanup') {
            steps {
                echo '🧹 Nettoyage du workspace avant checkout'
                cleanWs()
                checkout scm
            }
        }

        stage('Build Project') {
            steps {
                echo '🧱 Build du projet Java (sans tests unitaires)'
                dir("${PROJECT_DIR}") {
                    sh 'mvn clean install -DskipTests'
                }
            }
        }

        stage('Configurer JMeter') {
            steps {
                echo '⚙️ Configuration des tests JMeter'
                dir("${PROJECT_DIR}") {
                    sh 'mvn jmeter:configure'
                }
            }
        }

        stage('Exécuter le test SQL.jmx') {
            steps {
                echo "🚀 Exécution du fichier JMeter : ${JMETER_FILE}"
                dir("${PROJECT_DIR}") {
                    sh "mvn jmeter:jmeter -Djmeter.testfiles=${JMETER_FILE}"
                }
            }
        }

        stage('Vérifier les résultats') {
            steps {
                echo '🔍 Analyse des résultats JMeter'
                dir("${PROJECT_DIR}") {
                    sh "mvn jmeter:results"
                }
            }
        }

        stage('Publier le rapport HTML') {
            steps {
                echo "🗂 Publication du rapport JMeter"
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: "${PROJECT_DIR}/${REPORT_DIR}/html",
                    reportFiles: 'index.html',
                    reportName: "JMeter Report"
                ])
            }
        }
    }

    post {
        success {
            echo "🎉 Tous les tests JMeter ont réussi !"
        }
        failure {
            echo "❌ Des erreurs ont été détectées dans les tests JMeter."
        }
    }
}
