pipeline{
    agent any

    tools {
        nodejs "nodejs" 
    }

    environment {
        EMAIL_RECIPIENT = 'kevin.ndolo@student.moringaschool.com'
        RENDER_DEPLOY_HOOK = "https://api.render.com/deploy/srv-cvj6cqer433s73fq4tr0?key=dWix_l9i-LI"
		// SLACK_TOKEN = "xoxb-8683554533441-8694717634560-yEwDyNbcKzEwoq40vwo39VaQ"
        SLACK_TOKEN = "4919a5be-77cc-4129-9ff6-9cfff0274d13"
		WEBSITE_URL = "https://gallery-u15x.onrender.com"
    }


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

        stage("Test code"){
            steps{
                sh "npm test"
            }
        }

       
	    stage("Deploy to Render") {
            steps {
                echo 'Deploying application to Render...'
                sh "curl -X POST ${RENDER_DEPLOY_HOOK}"
            }
        }

    }


    post {
        success {
            echo 'Pipeline completed successfully!!'
			slackSend botUser: true, 
			channel: '#ip1', 
			color: '#00ff00', 
			message: 'Successful deploy.  Build No.: ${currentBuild.number}.  Website URL:  ${WEBSITE_URL}', 
			tokenCredentialId: "${SLACK_TOKEN}"
			
			
        }
        failure {
            mail to: "${EMAIL_RECIPIENT}",
                 subject: 'Pipeline Failure Notification',
                 body: 'The pipeline failed at some stage. Please check Jenkins logs for details.'
        }
        always {
            echo 'Pipeline execution complete!!'

        }
        aborted {
            echo 'Pipeline execution aborted!!' 
        }
    }
    
}
