// Define branded interfaces
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}

// ✅ Example usage (optional)
const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const totalMajor = sumMajorCredits(major1, major2);
console.log('Total Major Credits:', totalMajor);

const minor1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log('Total Minor Credits:', totalMinor);
