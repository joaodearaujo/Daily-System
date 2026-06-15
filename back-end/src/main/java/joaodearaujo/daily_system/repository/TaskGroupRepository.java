package joaodearaujo.daily_system.repository;

import joaodearaujo.daily_system.domain.entity.TaskGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskGroupRepository extends JpaRepository<TaskGroup, String> {}
