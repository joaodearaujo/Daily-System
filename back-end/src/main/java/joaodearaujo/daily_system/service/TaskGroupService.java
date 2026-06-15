package joaodearaujo.daily_system.service;

import joaodearaujo.daily_system.domain.entity.TaskGroup;
import joaodearaujo.daily_system.dto.request.TaskGroupRequest;
import joaodearaujo.daily_system.dto.response.TaskGroupResponse;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import joaodearaujo.daily_system.repository.TaskGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskGroupService {
    private final TaskGroupRepository taskGroupRepository;
    private final TaskService taskService;

    public TaskGroupService(TaskGroupRepository taskGroupRepository, TaskService taskService) {
        this.taskGroupRepository = taskGroupRepository;
        this.taskService = taskService;
    }

    public TaskGroupResponse createGroupTask(TaskGroupRequest TaskGroupRequest) {
        TaskGroup newTaskGroup = convertToEntity(TaskGroupRequest);
        taskGroupRepository.save(newTaskGroup);
        return convertToResponse(newTaskGroup);
    }

    public List<TaskGroupResponse> listAll() {
        List<TaskGroup> taskGroups = taskGroupRepository.findAll();
        return taskGroups.stream().
                map(this::convertToResponse)
                .toList();
    }

    public TaskGroup convertToEntity(TaskGroupRequest taskGroupRequest) {
        return new TaskGroup(
                taskGroupRequest.name(),
                taskGroupRequest.description()
        );
    }

    public TaskGroupResponse convertToResponse(TaskGroup taskGroup) {
       List<TaskResponse> taskResponseList = taskGroup.getTaskList().stream()
               .map(taskService::convertToResponse)
               .toList();

        return new TaskGroupResponse(
                taskGroup.getId(),
                taskGroup.getName(),
                taskGroup.getDescription(),
                taskResponseList
        );
    }
}
