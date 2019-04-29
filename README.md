# Camunda Webapp with Plugin - Example

This project contains an example of a Camunda SpringBoot Application that uses a camunda-bpm-webapp and a custom plugin that shows a link on the top navigation bar.

The link will only be rendered if the user belongs to the group "linkaccess".

## Structure of this project

The structure is as follows:

* camunda-bpm-webapp - The base camunda-bpm-webapp with the added dependency of the coded plugin inside the pom.xml.
* plugin-tasklist-navbar-action - The plugin which contains the code that adds the link to the top navigation bar.
* testcustomwebapp - A SpringBoot application that uses the local webapp dependency. The inherited dependency of the webapp has to be excluded from the "org.camunda.bpm.springboot:camunda-bpm-spring-boot-starter-webapp".

## Details regarding the customization

The major detail regarding this customization is the modifications in the file "plugin.js" or "iframe.html".

The file "plugin.js" has a controller that calls the group resources in order to get the count of times that the logged user is in the group "linkaccess". The result can be either 1 (the user is in the group) or 0 (the user isn't in the group). This result is then saved in the "$scope.groupAcount" so it can be obtained in the html page.

In the file "iframe.html", the link will be shown when the user has the group (groupCount > 0). Otherwise, it won't be shown.

Please check the following link for more information: https://docs.camunda.org/manual/latest/webapps/tasklist/tasklist-plugins/