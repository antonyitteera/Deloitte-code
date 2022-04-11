package com.deloitte.todolist;


import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.HashSet;
import java.util.Optional;

import org.hibernate.mapping.Set;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.deloitte.todolist.DTO.TaskDTO;
import com.deloitte.todolist.entity.TaskEntity;
import com.deloitte.todolist.entity.UserEntity;
import com.deloitte.todolist.repository.TaskRepository;
import com.deloitte.todolist.repository.UserRepo;
import com.deloitte.todolist.service.TaskServiceImpl;

@RunWith(MockitoJUnitRunner.class)
public class TodolistApplicationTests {

	
	@Mock
	private TaskRepository taskRepo;
	
	@Mock
	private UserRepo userRepo;
	
	@InjectMocks
	private TaskServiceImpl taskService;
	
	@Test
	public void whenUserNameNotPresentThenTaskAdditionFailed() {
		TaskDTO task= new TaskDTO();
		when(userRepo.findByUsername(ArgumentMatchers.any())).thenReturn(Optional.ofNullable(null));
		assertEquals("Task failed to insert", taskService.addToTask(task, "Antony"));
	}
	
	@Test
	public void whenUserNamePresentThenMessageThenTaskAddedSuccessfully() {
		UserEntity userObj= new UserEntity(1,"s","p",new HashSet<TaskEntity>());
		System.out.println(userObj);
		TaskDTO task= new TaskDTO();
		when(userRepo.findByUsername(ArgumentMatchers.any())).thenReturn(Optional.ofNullable(userObj));
		when(userRepo.save(ArgumentMatchers.any())).thenReturn(userObj);
		assertEquals("Task created successfully with id "+userObj.getId(), taskService.addToTask(task, "Antony"));
	}
}
