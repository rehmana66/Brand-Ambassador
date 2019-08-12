/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    userID
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      LocationID
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      ResumeID
      resume_key
    }
    jobs {
      items {
        userJobsID
      }
      nextToken
    }
    postings {
      items {
        UserPostingID
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    userID
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      LocationID
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      ResumeID
      resume_key
    }
    jobs {
      items {
        userJobsID
      }
      nextToken
    }
    postings {
      items {
        UserPostingID
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    userID
    firstName
    lastname
    phone_number
    user_type
    email
    dateOfBirth
    location {
      LocationID
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    resume {
      ResumeID
      resume_key
    }
    jobs {
      items {
        userJobsID
      }
      nextToken
    }
    postings {
      items {
        UserPostingID
      }
      nextToken
    }
  }
}
`;
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    LocationID
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
    LocationID
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
    LocationID
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
    ResumeID
    resume_key
  }
}
`;
export const updateResume = `mutation UpdateResume($input: UpdateResumeInput!) {
  updateResume(input: $input) {
    ResumeID
    resume_key
  }
}
`;
export const deleteResume = `mutation DeleteResume($input: DeleteResumeInput!) {
  deleteResume(input: $input) {
    ResumeID
    resume_key
  }
}
`;
export const createUserJobs = `mutation CreateUserJobs($input: CreateUserJobsInput!) {
  createUserJobs(input: $input) {
    userJobsID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    jobID {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const updateUserJobs = `mutation UpdateUserJobs($input: UpdateUserJobsInput!) {
  updateUserJobs(input: $input) {
    userJobsID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    jobID {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const deleteUserJobs = `mutation DeleteUserJobs($input: DeleteUserJobsInput!) {
  deleteUserJobs(input: $input) {
    userJobsID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    jobID {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const createJob = `mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    jobsID
    employer_id
    name
    employees {
      items {
        userJobsID
      }
      nextToken
    }
  }
}
`;
export const updateJob = `mutation UpdateJob($input: UpdateJobInput!) {
  updateJob(input: $input) {
    jobsID
    employer_id
    name
    employees {
      items {
        userJobsID
      }
      nextToken
    }
  }
}
`;
export const deleteJob = `mutation DeleteJob($input: DeleteJobInput!) {
  deleteJob(input: $input) {
    jobsID
    employer_id
    name
    employees {
      items {
        userJobsID
      }
      nextToken
    }
  }
}
`;
export const createUserPosting = `mutation CreateUserPosting($input: CreateUserPostingInput!) {
  createUserPosting(input: $input) {
    UserPostingID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    postingID {
      postingID
      employer_id
      userID {
        nextToken
      }
      title
      desc
      misc
      shift_max
      rate
    }
  }
}
`;
export const updateUserPosting = `mutation UpdateUserPosting($input: UpdateUserPostingInput!) {
  updateUserPosting(input: $input) {
    UserPostingID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    postingID {
      postingID
      employer_id
      userID {
        nextToken
      }
      title
      desc
      misc
      shift_max
      rate
    }
  }
}
`;
export const deleteUserPosting = `mutation DeleteUserPosting($input: DeleteUserPostingInput!) {
  deleteUserPosting(input: $input) {
    UserPostingID
    userID {
      userID
      firstName
      lastname
      phone_number
      user_type
      email
      dateOfBirth
      location {
        LocationID
        city
        country
        isoCountryCode
        postalCode
        region
        street
      }
      resume {
        ResumeID
        resume_key
      }
      jobs {
        nextToken
      }
      postings {
        nextToken
      }
    }
    postingID {
      postingID
      employer_id
      userID {
        nextToken
      }
      title
      desc
      misc
      shift_max
      rate
    }
  }
}
`;
export const createPosting = `mutation CreatePosting($input: CreatePostingInput!) {
  createPosting(input: $input) {
    postingID
    employer_id
    userID {
      items {
        UserPostingID
      }
      nextToken
    }
    title
    desc
    misc
    shift_max
    rate
  }
}
`;
export const updatePosting = `mutation UpdatePosting($input: UpdatePostingInput!) {
  updatePosting(input: $input) {
    postingID
    employer_id
    userID {
      items {
        UserPostingID
      }
      nextToken
    }
    title
    desc
    misc
    shift_max
    rate
  }
}
`;
export const deletePosting = `mutation DeletePosting($input: DeletePostingInput!) {
  deletePosting(input: $input) {
    postingID
    employer_id
    userID {
      items {
        UserPostingID
      }
      nextToken
    }
    title
    desc
    misc
    shift_max
    rate
  }
}
`;
export const createApplication = `mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    applicationID
    status
  }
}
`;
export const updateApplication = `mutation UpdateApplication($input: UpdateApplicationInput!) {
  updateApplication(input: $input) {
    applicationID
    status
  }
}
`;
export const deleteApplication = `mutation DeleteApplication($input: DeleteApplicationInput!) {
  deleteApplication(input: $input) {
    applicationID
    status
  }
}
`;
