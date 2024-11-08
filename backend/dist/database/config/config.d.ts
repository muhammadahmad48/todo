export namespace development {
    let dialect: string;
    let host: string;
    let port: number;
    let username: string;
    let password: string;
    let database: string;
}
export namespace test {
    let dialect_1: string;
    export { dialect_1 as dialect };
    let host_1: string;
    export { host_1 as host };
    let port_1: string;
    export { port_1 as port };
    let username_1: string;
    export { username_1 as username };
    let password_1: string;
    export { password_1 as password };
    let database_1: string;
    export { database_1 as database };
}
export namespace production {
    let dialect_2: string;
    export { dialect_2 as dialect };
    let host_2: string;
    export { host_2 as host };
    let port_2: string;
    export { port_2 as port };
    let username_2: string;
    export { username_2 as username };
    let password_2: string;
    export { password_2 as password };
    let database_2: string;
    export { database_2 as database };
}
