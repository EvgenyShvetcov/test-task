export interface Api {
    name: string;
    jobs: Job[];
    websites: Website[];
}

export interface Job {
    id: number;
    reference: string;
    name: string;
    slug: string;
    description: string;
    published_at: string;
    created_at: {
        fr: string;
        en: string;
    };
    office: {
        id: 196;
        name: string;
        address: string;
        zip_code: string;
        district: string;
        city:string;
        country: {
            fr: string;
            en: string
        }
    };
    department: {
        id: 10;
        name:string
    };
    contract_type: {
        fr: string;
        en: string;
        es: string;
        cs: string;
        sk: string;
    };
    profile: string;
    recruitment_process: string;
    salary: {
        min: null;
        max: null;
        currency: string;
        period: string
    };
    cms_sites_references: string[];
    websites_urls: {
        website_reference: string;
        url: string;
    }[]
}

export interface Website {
    kind: string;
    organization_url: string;
    reference: string;
    root_url: string;
}