package angular.deviantart.project.repository;

import org.springframework.data.repository.CrudRepository;

import angular.deviantart.project.model.User;


public interface UserRepository extends CrudRepository<User, Integer> {

}