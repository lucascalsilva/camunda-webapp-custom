package com.camunda.consulting.example.plugin.tasklist.detail.resources;

import javax.ws.rs.Path;

import org.camunda.bpm.tasklist.resource.AbstractTasklistPluginRootResource;

import com.camunda.consulting.example.plugin.tasklist.detail.NavbarActionTasklistPlugin;

@Path("plugin/" + NavbarActionTasklistPlugin.ID)
public class NavbarActionTasklistPluginRootResource extends AbstractTasklistPluginRootResource {
  public NavbarActionTasklistPluginRootResource() {
    super(NavbarActionTasklistPlugin.ID);
  }
}
