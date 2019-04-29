package com.camunda.consulting.example.plugin.tasklist.detail;

import java.util.HashSet;
import java.util.Set;

import org.camunda.bpm.tasklist.plugin.spi.impl.AbstractTasklistPlugin;

import com.camunda.consulting.example.plugin.tasklist.detail.resources.NavbarActionTasklistPluginRootResource;

public class NavbarActionTasklistPlugin extends AbstractTasklistPlugin {

  public static final String ID = "iframe-detail-tasklist-plugin";

  public String getId() {
    return ID;
  }
  
  @Override
  public Set<Class<?>> getResourceClasses() {
    Set<Class<?>> classes = new HashSet<Class<?>>();
    classes.add(NavbarActionTasklistPluginRootResource.class);
    return classes;
  }
  
}
