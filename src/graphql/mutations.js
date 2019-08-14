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
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastname
        phone_number
        user_type
        email
        dateOfBirth
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        desc
        misc
        rate
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
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastname
        phone_number
        user_type
        email
        dateOfBirth
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        desc
        misc
        rate
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
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastname
        phone_number
        user_type
        email
        dateOfBirth
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        desc
        misc
        rate
      }
    }
  }
}
`;
export const createJob = `mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    id
    employer {
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
      apply {
        nextToken
      }
    }
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
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const updateJob = `mutation UpdateJob($input: UpdateJobInput!) {
  updateJob(input: $input) {
    id
    employer {
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
      apply {
        nextToken
      }
    }
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
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const deleteJob = `mutation DeleteJob($input: DeleteJobInput!) {
  deleteJob(input: $input) {
    id
    employer {
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
      apply {
        nextToken
      }
    }
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
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
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
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastname
        phone_number
        user_type
        email
        dateOfBirth
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        desc
        misc
        rate
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
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastname
        phone_number
        user_type
        email
        dateOfBirth
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        desc
        misc
        rate
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
      apply {
        nextToken
      }
    }
    jobID {
      id
      employer {
        id
        firstName
        lastname
        phone_number
        user_type
        email
        dateOfBirth
      }
      name
      employees {
        nextToken
      }
      applications {
        nextToken
      }
      details {
        id
        title
        desc
        misc
        rate
      }
    }
  }
}
`;
export const createDetails = `mutation CreateDetails($input: CreateDetailsInput!) {
  createDetails(input: $input) {
    id
    title
    desc
    misc
    rate
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    category {
      items {
        id
        name
      }
      nextToken
    }
    dates {
      items {
        id
        date
      }
      nextToken
    }
  }
}
`;
export const updateDetails = `mutation UpdateDetails($input: UpdateDetailsInput!) {
  updateDetails(input: $input) {
    id
    title
    desc
    misc
    rate
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    category {
      items {
        id
        name
      }
      nextToken
    }
    dates {
      items {
        id
        date
      }
      nextToken
    }
  }
}
`;
export const deleteDetails = `mutation DeleteDetails($input: DeleteDetailsInput!) {
  deleteDetails(input: $input) {
    id
    title
    desc
    misc
    rate
    location {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    category {
      items {
        id
        name
      }
      nextToken
    }
    dates {
      items {
        id
        date
      }
      nextToken
    }
  }
}
`;
export const createJobDates = `mutation CreateJobDates($input: CreateJobDatesInput!) {
  createJobDates(input: $input) {
    id
    date
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const updateJobDates = `mutation UpdateJobDates($input: UpdateJobDatesInput!) {
  updateJobDates(input: $input) {
    id
    date
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const deleteJobDates = `mutation DeleteJobDates($input: DeleteJobDatesInput!) {
  deleteJobDates(input: $input) {
    id
    date
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    name
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    name
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    name
    details {
      id
      title
      desc
      misc
      rate
      location {
        id
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      category {
        nextToken
      }
      dates {
        nextToken
      }
    }
  }
}
`;
