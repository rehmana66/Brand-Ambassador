/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      LocationID
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
    ResumeID
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
      ResumeID
      resume_key
    }
    nextToken
  }
}
`;
export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
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
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      jobsID
      employer_id
      name
      employees {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPosting = `query GetPosting($id: ID!) {
  getPosting(id: $id) {
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
export const listPostings = `query ListPostings(
  $filter: ModelPostingFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getApplication = `query GetApplication($id: ID!) {
  getApplication(id: $id) {
    applicationID
    status
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
      applicationID
      status
    }
    nextToken
  }
}
`;
