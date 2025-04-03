pipeline {
    agent {
        docker {
            image 'maven:latest'
            args "--entrypoint ''"
        }
    }

    // options {
    //     skipDefaultCheckout(true)
    // }

    // environment {
    //     PROJECT_DIR = "jmeter-selenium"
    //     JMETER_FILE = "src/test/jmeter/SQL.jmx"
    //     REPORT_DIR = "target/jmeter/reports"
    // }

    stages {
        // stage('Checkout & Cleanup') {
        //     steps {
        //         echo '🧹 Nettoyage du workspace avant checkout'
        //         cleanWs()
        //         checkout scm
        //     }
        // }

        stage('Verication de'){
            steps{
                sh 'mvn -version'
            }
        }
        stage('Build Project') {
            steps {
                echo '🧱 Build du projet Java (sans tests unitaires)'
                
                sh 'mvn clean compile'
                
            }
        }

        stage('Execute  test Jmeter'){
            steps{
                sh '''
            mvn jmeter:jmeter \
            -Djmeter.save.saveservice.output_format=xml \
            -Djmeter.results.file.format=xml \
            -Djmeter.result.jtl=target/jmeter/results/results.jtl
        '''
            }
        }
        
      
        // stage('Configurer JMeter') {
        //     steps {
        //         echo '⚙️ Configuration des tests JMeter'
                
        //         sh 'mvn test'
                
        //     }
        // }

        // stage('Exécuter le test SQL.jmx') {
        //     steps {
        //         echo "🚀 Exécution du fichier JMeter : ${JMETER_FILE}"
        //         dir("${PROJECT_DIR}") {
        //             sh "mvn jmeter:jmeter -Djmeter.testfiles=${JMETER_FILE}"
        //         }
        //     }
        // }

        // stage('Vérifier les résultats') {
        //     steps {
        //         echo '🔍 Analyse des résultats JMeter'
        //         dir("${PROJECT_DIR}") {
        //             sh "mvn jmeter:results"
        //         }
        //     }
        // }

        // stage('Publier le rapport HTML') {
        //     steps {
        //         echo "🗂 Publication du rapport JMeter"
        //         publishHTML(target: [
        //             allowMissing: false,
        //             alwaysLinkToLastBuild: true,
        //             keepAll: true,
        //             reportDir: "${PROJECT_DIR}/${REPORT_DIR}/html",
        //             reportFiles: 'index.html',
        //             reportName: "JMeter Report"
        //         ])
        //     }
        // }
        stage('Publier les résultats JMeter (Plugin Performance)') {
    steps {
        echo "📈 Publication des résultats de performance"
        // archiveArtifacts permet de garder le .jtl dans Jenkins
        archiveArtifacts artifacts: 'target/jmeter/results/results.jtl', allowEmptyArchive: false
        // Le plugin Performance va utiliser ce chemin
        perfReport sourceDataFiles: 'target/jmeter/results/results.jtl'
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
