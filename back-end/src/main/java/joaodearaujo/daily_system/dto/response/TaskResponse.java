package joaodearaujo.daily_system.dto.response;
import joaodearaujo.daily_system.domain.enums.TaskTags;

public record TaskResponse(
        String groupId,
        String id,
        TaskTags tag,
        String name,
        String description,
        Boolean isCore
) {}
