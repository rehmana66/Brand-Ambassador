// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      city
      country
      isoCountryCode
      postalCode
      region
      street
    }
    nextToken
  }
}
`;
export const getResume = `query GetResume($id: ID!) {
  getResume(id: $id) {
    id
    resume_key
  }
}
`;
export const listResumes = `query ListResumes(
  $filter: ModelResumeFilterInput
  $limit: Int
  $nextToken: String
) {
  listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      resume_key
    }
    nextToken
  }
}
`;
export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
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
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getApplication = `query GetApplication($id: ID!) {
  getApplication(id: $id) {
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
export const listApplications = `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
      jobID {
        id
        employer_id
        name
      }
    }
    nextToken
  }
}
`;
export const getShift = `query GetShift($id: ID!) {
  getShift(id: $id) {
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
export const listShifts = `query ListShifts(
  $filter: ModelShiftFilterInput
  $limit: Int
  $nextToken: String
) {
  listShifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      desc
      misc
      rate
      test {
        nextToken
      }
    }
    nextToken
  }
}
`;
