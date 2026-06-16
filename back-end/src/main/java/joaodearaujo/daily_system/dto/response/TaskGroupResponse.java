package joaodearaujo.daily_system.dto.response;

import java.util.List;

public record TaskGroupResponse(
        String id,
        String title,
        String description,
        List<TaskResponse> tasks
) {}
