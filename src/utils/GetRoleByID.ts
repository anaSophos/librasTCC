import Role from '../models/Role';
import { TypeRole } from '../@types/role';

async function getRoleById(
  id: number,
): Promise<{ role: TypeRole | null; error?: string }> {
  try {
    const role = await Role.findById(id).populate('permissions');
    if (!role) {
      return { role: null, error: 'Role not found' };
    }
    return { role };
  } catch (error) {
    return {
      role: null,
      error: `Error fetching role: ${(error as Error).message}`,
    };
  }
}

export default getRoleById;
