package joaodearaujo.daily_system.dto.response;

import java.util.List;

public record TaskGroupResponse(
        String id,
        String name,
        String description,
        List<TaskResponse> taskResponseList
) {}
