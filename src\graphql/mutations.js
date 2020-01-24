/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    fullName
    phone_number
    user_type
    email
    dateOfBirth
    gender
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
        verify
      }
      nextToken
    }
    apply {
      items {
        id
        user
        job
        status
        date
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    fullName
    phone_number
    user_type
    email
    dateOfBirth
    gender
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
        verify
      }
      nextToken
    }
    apply {
      items {
        id
        user
        job
        status
        date
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    fullName
    phone_number
    user_type
    email
    dateOfBirth
    gender
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
        verify
      }
      nextToken
    }
    apply {
      items {
        id
        user
        job
        status
        date
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
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    verify
  }
}
`;
export const updateUserJobs = `mutation UpdateUserJobs($input: UpdateUserJobsInput!) {
  updateUserJobs(input: $input) {
    id
    userID {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    verify
  }
}
`;
export const deleteUserJobs = `mutation DeleteUserJobs($input: DeleteUserJobsInput!) {
  deleteUserJobs(input: $input) {
    id
    userID {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    verify
  }
}
`;
export const createJob = `mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
    id
    employer {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        verify
      }
      nextToken
    }
    applications {
      items {
        id
        user
        job
        status
        date
      }
      nextToken
    }
    details {
      id
      title
      body
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
      dates {
        nextToken
      }
    }
    search {
      items {
        id
      }
      nextToken
    }
    date
  }
}
`;
export const updateJob = `mutation UpdateJob($input: UpdateJobInput!) {
  updateJob(input: $input) {
    id
    employer {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        verify
      }
      nextToken
    }
    applications {
      items {
        id
        user
        job
        status
        date
      }
      nextToken
    }
    details {
      id
      title
      body
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
      dates {
        nextToken
      }
    }
    search {
      items {
        id
      }
      nextToken
    }
    date
  }
}
`;
export const deleteJob = `mutation DeleteJob($input: DeleteJobInput!) {
  deleteJob(input: $input) {
    id
    employer {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        verify
      }
      nextToken
    }
    applications {
      items {
        id
        user
        job
        status
        date
      }
      nextToken
    }
    details {
      id
      title
      body
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
      dates {
        nextToken
      }
    }
    search {
      items {
        id
      }
      nextToken
    }
    date
  }
}
`;
export const createJobSearch = `mutation CreateJobSearch($input: CreateJobSearchInput!) {
  createJobSearch(input: $input) {
    id
    job {
      id
      employer {
        id
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    category {
      id
      name
      search {
        nextToken
      }
    }
  }
}
`;
export const updateJobSearch = `mutation UpdateJobSearch($input: UpdateJobSearchInput!) {
  updateJobSearch(input: $input) {
    id
    job {
      id
      employer {
        id
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    category {
      id
      name
      search {
        nextToken
      }
    }
  }
}
`;
export const deleteJobSearch = `mutation DeleteJobSearch($input: DeleteJobSearchInput!) {
  deleteJobSearch(input: $input) {
    id
    job {
      id
      employer {
        id
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
    category {
      id
      name
      search {
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
    search {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    name
    search {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    name
    search {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createApplication = `mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    id
    user
    job
    status
    date
    userID {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
  }
}
`;
export const updateApplication = `mutation UpdateApplication($input: UpdateApplicationInput!) {
  updateApplication(input: $input) {
    id
    user
    job
    status
    date
    userID {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
  }
}
`;
export const deleteApplication = `mutation DeleteApplication($input: DeleteApplicationInput!) {
  deleteApplication(input: $input) {
    id
    user
    job
    status
    date
    userID {
      id
      fullName
      phone_number
      user_type
      email
      dateOfBirth
      gender
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
        fullName
        phone_number
        user_type
        email
        dateOfBirth
        gender
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
        body
        desc
        misc
        rate
      }
      search {
        nextToken
      }
      date
    }
  }
}
`;
export const createDetails = `mutation CreateDetails($input: CreateDetailsInput!) {
  createDetails(input: $input) {
    id
    title
    body
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
    body
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
    body
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
      body
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
      body
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
      body
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
      dates {
        nextToken
      }
    }
  }
}
`;
