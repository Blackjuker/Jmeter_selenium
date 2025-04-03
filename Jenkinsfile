pipeline {
    agent {
        docker {
            image 'maven:3.8.6-openjdk-11'
            args '-u root:root'
        }
    }

    environment {
        JMETER_FILE = "src/test/jmeter/SQL.jmx"
        REPORT_DIR = "target/jmeter/reports"
    }

    stages {
        stage('Build Project') {
            steps {
                echo '🧱 Build du projet Java (sans tests unitaires)'
                sh 'mvn clean install -DskipTests'
            }
        }

        stage('Configurer JMeter') {
            steps {
                echo '⚙️ Configuration des tests JMeter'
                sh 'mvn jmeter:configure'
            }
        }

        stage('Exécuter le test SQL.jmx') {
            steps {
                echo "🙋🏽 liste des fichiers"
                sh 'echo "📂 Contenu de src/test/jmeter :" && ls -l src/test/jmeter'

                echo "🚀 Exécution du fichier JMeter : ${JMETER_FILE}"
                sh "mvn jmeter:jmeter -Djmeter.testfiles=${JMETER_FILE}"
            }
        }

        stage('Vérifier les résultats') {
            steps {
                echo '🔍 Analyse des résultats JMeter'
                sh "mvn jmeter:results"
            }
        }

        stage('Publier le rapport HTML') {
            steps {
                echo "🗂 Publication du rapport JMeter"
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
        success {
            echo "🎉 Tous les tests JMeter ont réussi !"
        }
        failure {
            echo "❌ Des erreurs ont été détectées dans les tests JMeter."
        }
    }
}
