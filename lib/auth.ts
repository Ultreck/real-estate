type Role = "admin" | "landlord" | "renter" | "public";

export const getUser = async (): Promise<{role: Role, name:string} | null> => {
	return {
        name: 'Emma',
        role: 'admin'
    };
};

