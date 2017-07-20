UPDATE vehicles
set owner_id = null
WHERE id=$2
RETURNING *;