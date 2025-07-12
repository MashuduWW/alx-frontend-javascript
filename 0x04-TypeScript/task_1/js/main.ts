interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;                        // Allows addition of attributes like "contract"
}


interface Directors extends Teacher {
  numberOfReports: number;
}

//  Function type interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Defining function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface describing the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor
interface StudentConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing the class interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}















