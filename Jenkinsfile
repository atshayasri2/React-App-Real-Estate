pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {

    PATH = "C:\\WINDOWS\\SYSTEM32"

}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
