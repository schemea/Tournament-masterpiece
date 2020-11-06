node("docker") {
  checkout scm

  def registry = "${env.REGISTRY}"
  def image_name = "tournament"
  def cache_image = "$registry/$image_name-builder"

  def build_image
  def runtime_image

  ansiColor('xterm') {
    dir("./app") {
      stage("build") {
        script {
          sh "docker pull $cache_image || echo no cached image"
          build_image = docker.build "tournament-builder:$BUILD_NUMBER",  "--cache-from $cache_image -t $cache_image  --target builder ."
        }
      }

      stage("publish") {
        docker.image("$cache_image").push()
        runtime_image = docker.build "$registry/$image_name:$BUILD_NUMBER", "--cache-from $cache_image ."
        runtime_image.push()
        runtime_image.push("latest")
      }
    }
  }
}
