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
        verify
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
        verify
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
  }
}
`;
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      search {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getJobSearch = `query GetJobSearch($id: ID!) {
  getJobSearch(id: $id) {
    id
    job {
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
      search {
        nextToken
      }
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
export const listJobSearchs = `query ListJobSearchs(
  $filter: ModelJobSearchFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobSearchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      job {
        id
        name
      }
      category {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      search {
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
      search {
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
        name
      }
    }
    nextToken
  }
}
`;
export const getDetails = `query GetDetails($id: ID!) {
  getDetails(id: $id) {
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
export const listDetailss = `query ListDetailss(
  $filter: ModelDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetailss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      dates {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getJobDates = `query GetJobDates($id: ID!) {
  getJobDates(id: $id) {
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
      dates {
        nextToken
      }
    }
  }
}
`;
export const listJobDatess = `query ListJobDatess(
  $filter: ModelJobDatesFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobDatess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      details {
        id
        title
        desc
        misc
        rate
      }
    }
    nextToken
  }
}
`;
