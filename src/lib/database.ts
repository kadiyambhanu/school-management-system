// For development, we'll use an in-memory array as our database
// In production, this would be replaced with MySQL connection

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: number;
  image: string | null;
  email_id: string;
  created_at: Date;
}

let schools: School[] = [];
let nextId = 1;

export async function initializeDatabase() {
  console.log('Database initialized (in-memory)');
  return true;
}

export async function query(sql: string, params: (string | number | null)[] = []) {
  // Simulate database operations for development
  if (sql.startsWith('SELECT')) {
    if (sql.includes('FROM schools')) {
      return [schools];
    }
  } else if (sql.startsWith('INSERT INTO schools')) {
    const school: School = {
      id: nextId++,
      name: params[0] as string,
      address: params[1] as string,
      city: params[2] as string,
      state: params[3] as string,
      contact: params[4] as number,
      image: params[5] as string | null,
      email_id: params[6] as string,
      created_at: new Date()
    };
    schools.push(school);
    return [{ insertId: school.id }];
  }
  
  return [];
}

// Helper function to reset database for testing
export function resetDatabase() {
  schools = [];
  nextId = 1;
}
