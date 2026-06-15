package joaodearaujo.daily_system.controllers;

import joaodearaujo.daily_system.dto.request.TaskGroupRequest;
import joaodearaujo.daily_system.dto.response.TaskGroupResponse;
import joaodearaujo.daily_system.service.TaskGroupService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/taskGroup")
public class TaskGroupController {

    private final TaskGroupService taskGroupService;

    private TaskGroupController(TaskGroupService taskGroupService) {
        this.taskGroupService = taskGroupService;
    }

    @PostMapping
    private TaskGroupResponse createTask(@RequestBody TaskGroupRequest taskGroupRequest) {
        return taskGroupService.createGroupTask(taskGroupRequest);
    }

    @GetMapping
    private List<TaskGroupResponse> listAll() {
        return taskGroupService.listAll();
    }
}
