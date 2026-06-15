package joaodearaujo.daily_system.repository;

import joaodearaujo.daily_system.domain.entity.Task;
import joaodearaujo.daily_system.domain.entity.TaskGroup;
import joaodearaujo.daily_system.dto.response.TaskResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, String> {}
