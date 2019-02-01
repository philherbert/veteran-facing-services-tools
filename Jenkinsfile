pipeline {
  agent {
    dockerfile {
      label 'vetsgov-general-purpose'
    }
  }
  environment {
    BABEL_CACHE_PATH = '${env.WORKSPACE}'
    NODE_ENV = 'production'
  }

  stages {
    stage('setup') {
      steps {
        sh 'yarn install --production=false'
        sh 'yarn bootstrap'
      }
    }

    stage('lint and test') {
      steps {
        parallel (
          'lint': {
            sh 'npm run lint'
          },
          'test': {
            sh 'npm run test'
          },
          'build': {
            sh 'npm run build'
          }
        )
      }
    }

    /* stage('build and publish') { */
    /*   when { branch 'master' } */
    /*   steps { */
    /*     sh 'git config --global user.email james.kassemi+vabot@adhocteam.us' */
    /*     sh 'git config --global user.name va-bot' */
    /*     sh 'git config --global credential.helper "/bin/bash ' + env.WORKSPACE + '/scripts/credential-helper.sh"' */
    /*     withCredentials([[ */
    /*       $class: 'UsernamePasswordMultiBinding', */
    /*       credentialsId: 'va-bot', */
    /*       usernameVariable: 'GIT_USERNAME', */
    /*       passwordVariable: 'GIT_PASSWORD' */
    /*     ]]) { */
    /*       sh 'npm run site' */
    /*     } */
    /*   } */
    /* } */
  }
}