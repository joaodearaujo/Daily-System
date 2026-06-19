package joaodearaujo.daily_system.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Routine {

    @Id
    String id;

    @Column(unique = true, nullable = false)
    String name;

    @Column(nullable = true)
    String description;

    @OneToMany(mappedBy = "page")
    List<TaskGroup> groupList;

    public Routine() {}

    public Routine(String name, String description) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.description = description;
        this.groupList = new ArrayList<>();
    }

    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TaskGroup> getGroupList() {
        return groupList;
    }

    public void setGroupList(List<TaskGroup> groupList) {
        this.groupList = groupList;
    }

    public String getId() {
        return id;
    }

}
