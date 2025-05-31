pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        sh 'npm test'
      }
    }

    stage('Code Quality') {
      steps {
        echo 'Running SonarQube analysis...'
        withSonarQubeEnv('MySonarServer') {
          sh 'sonar-scanner'
        }
      }
    }

    stage('Security') {
      steps {
        echo 'Running Trivy scan...'
        sh 'trivy fs . || true'
      }
    }

    stage('Docker Build & Deploy') {
      steps {
        echo 'Building Docker image...'
        sh 'docker build -t book-api .'
        echo 'Running container...'
        sh 'docker run -d -p 3000:3000 book-api'
      }
    }
  }
}
