package joaodearaujo.daily_system.domain.entity;

import jakarta.persistence.*;
import joaodearaujo.daily_system.domain.enums.Tag;
import java.util.UUID;

@Entity
public class Task {

    @Id
    private String id;

    @Column
    @Enumerated(EnumType.STRING)
    private Tag tag;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Boolean isCore;


    public Task(Tag tag, String name, String description, Boolean isCore ) {
        this.id = UUID.randomUUID().toString();
        this.tag = tag;
        this.description = description;
        this.isCore = isCore;
    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
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
}
