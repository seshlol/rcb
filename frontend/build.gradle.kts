import com.moowork.gradle.node.yarn.YarnTask

plugins {
    id("com.moowork.node") version "1.3.1"
}

tasks {
    
    task<YarnTask>("build") {
        dependsOn("yarn_install")
        args = listOf("run", "build")
    }

    task<Copy>("copyHtml") {
        from(file("$projectDir/dist/index.html"))
        into("${project(":backend").projectDir}/src/main/resources/templates")
    }

    task<Copy>("copyJs") {
        from(file("$projectDir/dist/index.js"))
        into("${project(":backend").projectDir}/src/main/resources/static")
    }

    task("copyFrontend") {
        dependsOn("build")
        dependsOn("copyHtml")
        dependsOn("copyJs")
    }

    task<YarnTask>("start") {
        dependsOn("yarn_install")
        args = listOf("run", "start")
    }
}



