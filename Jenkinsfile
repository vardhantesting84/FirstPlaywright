// Jenkinsfile
pipeline {
    agent any // Or specify a label if you have specific agents

    tools {
        // Ensure this matches the name you gave your NodeJS installation in Global Tool Configuration
        nodejs 'Node18'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm // Checks out your repository
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Installs Node.js dependencies
                // Install Playwright browsers (Chromium, Firefox, WebKit)
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npm test' // Executes the 'test' script defined in package.json
            }
        }
    }

    post {
        always {
            // Publish JUnit XML report
            junit 'test-results/junit-report.xml'

            // Publish Playwright HTML report
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report', // Directory where Playwright saves its HTML report
                reportFiles: 'index.html',     // The main HTML file for the report
                reportName: 'Playwright HTML Report'
            ])

            // Archive Playwright artifacts (screenshots, videos, traces)
            archiveArtifacts artifacts: 'test-results/**/*', fingerprint: true
        }
    }
}