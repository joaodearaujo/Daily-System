    package joaodearaujo.daily_system.domain.entity;

    import jakarta.persistence.*;
    import joaodearaujo.daily_system.domain.enums.TaskTags;

    import java.util.UUID;

    @Entity
    public class Task {

        @Id
        private String id;

        @Column
        @Enumerated(EnumType.STRING)
        private TaskTags tag;

        @Column
        private String name;

        @Column
        private String description;

        @Column
        private Boolean isCore;

        @ManyToOne
        @JoinColumn(name = "group_id", nullable = false)
        private TaskGroup group;

        public Task() {}

        public Task(TaskTags tag, String name, String description, Boolean isCore, TaskGroup group ) {
            this.group = group;
            this.id = UUID.randomUUID().toString();
            this.name = name;
            this.tag = tag;
            this.description = description;
            this.isCore = isCore;
        }

        public String getId() {
            return id;
        }

        public TaskTags getTag() {
            return tag;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public Boolean getCore() {
            return isCore;
        }

        public void setCore(Boolean core) {
            isCore = core;
        }

        public TaskGroup getGroup() {
            return group;
        }

        public void setTaskGroup(TaskGroup group) {
            this.group = group;
        }
    }
