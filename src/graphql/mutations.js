// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      id
      resume_key
    }
    jobs {
      items {
        id
      }
      nextToken
    }
    shifts {
      items {
        id
      }
      nextToken
    }
    apply {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      id
      resume_key
    }
    jobs {
      items {
        id
      }
      nextToken
    }
    shifts {
      items {
        id
      }
      nextToken
    }
    apply {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      id
      resume_key
    }
    jobs {
      items {
        id
      }
      nextToken
    }
    shifts {
      items {
        id
      }
      nextToken
    }
    apply {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    city
    country
    isoCountryCode
    postalCode
    region
    street
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    city
    country
    isoCountryCode
    postalCode
    region
    street
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    city
    country
    isoCountryCode
    postalCode
    region
    street
  }
}
`;
export const createResume = `mutation CreateResume($input: CreateResumeInput!) {
  createResume(input: $input) {
    id
    resume_key
  }
}
`;
export const updateResume = `mutation UpdateResume($input: UpdateResumeInput!) {
  updateResume(input: $input) {
    id
    resume_key
  }
}
`;
export const deleteResume = `mutation DeleteResume($input: DeleteResumeInput!) {
  deleteResume(input: $input) {
    id
    resume_key
  }
}
`;
export const createUserJobs = `mutation CreateUserJobs($input: CreateUserJobsInput!) {
  createUserJobs(input: $input) {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const updateUserJobs = `mutation UpdateUserJobs($input: UpdateUserJobsInput!) {
  updateUserJobs(input: $input) {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const deleteUserJobs = `mutation DeleteUserJobs($input: DeleteUserJobsInput!) {
  deleteUserJobs(input: $input) {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const createJob = `mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    id
    employer_id
    name
    employees {
      items {
        id
      }
      nextToken
    }
    applications {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const updateJob = `mutation UpdateJob($input: UpdateJobInput!) {
  updateJob(input: $input) {
    id
    employer_id
    name
    employees {
      items {
        id
      }
      nextToken
    }
    applications {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const deleteJob = `mutation DeleteJob($input: DeleteJobInput!) {
  deleteJob(input: $input) {
    id
    employer_id
    name
    employees {
      items {
        id
      }
      nextToken
    }
    applications {
      items {
        id
        status
      }
      nextToken
    }
  }
}
`;
export const createApplication = `mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    id
    status
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const updateApplication = `mutation UpdateApplication($input: UpdateApplicationInput!) {
  updateApplication(input: $input) {
    id
    status
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const deleteApplication = `mutation DeleteApplication($input: DeleteApplicationInput!) {
  deleteApplication(input: $input) {
    id
    status
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer_id
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
    }
  }
}
`;
export const createUserShifts = `mutation CreateUserShifts($input: CreateUserShiftsInput!) {
  createUserShifts(input: $input) {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    shiftID {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
  }
}
`;
export const updateUserShifts = `mutation UpdateUserShifts($input: UpdateUserShiftsInput!) {
  updateUserShifts(input: $input) {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    shiftID {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
  }
}
`;
export const deleteUserShifts = `mutation DeleteUserShifts($input: DeleteUserShiftsInput!) {
  deleteUserShifts(input: $input) {
    id
    userID {
      id
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        id
        resume_key
      }
      jobs {
        nextToken
      }
      shifts {
        nextToken
      }
      apply {
        nextToken
      }
    }
    shiftID {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
  }
}
`;
export const createShift = `mutation CreateShift($input: CreateShiftInput!) {
  createShift(input: $input) {
    id
    title
    desc
    misc
    rate
    test {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateShift = `mutation UpdateShift($input: UpdateShiftInput!) {
  updateShift(input: $input) {
    id
    title
    desc
    misc
    rate
    test {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteShift = `mutation DeleteShift($input: DeleteShiftInput!) {
  deleteShift(input: $input) {
    id
    title
    desc
    misc
    rate
    test {
      items {
        id
      }
      nextToken
    }
  }
}
`;
