package joaodearaujo.daily_system.dto.request;

import joaodearaujo.daily_system.domain.enums.TaskTags;

public record TaskRequest(
    String groupId,
    TaskTags tag,
    String name,
    String description,
    Boolean isCore
) {}
