package com.example.Exception;

public class NotFound extends RuntimeException {

  NotFound(String id) {
    super("Could not find  " + id);
  }
}
