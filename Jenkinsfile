pipeline{
    agent any
    stages{
        stage("Cloning repository"){
            steps{
                git branch:"master", url:"https://github.com/kevindev10/gallery.git"
            }
        }

        stage("Install dependencies"){
            steps{
                sh "npm install"
            }
        }

        stage("Run code"){
            steps{
                sh "node server"
            }
        }
    }
    
}
