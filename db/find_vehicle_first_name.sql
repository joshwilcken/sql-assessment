SELECT vehicles.id, make, model, year, owner_id
FROM vehicles
JOIN users
ON (users.id=vehicles.owner_id)
where users.name like $1;