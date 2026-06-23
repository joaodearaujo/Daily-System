package joaodearaujo.daily_system.controllers;

import joaodearaujo.daily_system.dto.request.RoutineRequest;
import joaodearaujo.daily_system.dto.response.RoutineResponse;
import joaodearaujo.daily_system.service.RoutineService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/routine")
public class RoutineController {

    private final RoutineService routineService;

    public RoutineController(RoutineService routineService) {
        this.routineService = routineService;
    }

    @PostMapping
    private RoutineResponse createRoutine(@RequestBody RoutineRequest routineRequest) {
        return  routineService.createRoutine(routineRequest);
    }

    @GetMapping
    private List<RoutineResponse> listAll() {
        return routineService.findAll();
    }

    @DeleteMapping("/{id}")
    private void deleteTask(@PathVariable String id) {
        routineService.deleteRoutine(id);
    }
}
