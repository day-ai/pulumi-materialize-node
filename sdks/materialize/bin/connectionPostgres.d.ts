import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ConnectionPostgres extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionPostgres resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionPostgresState, opts?: pulumi.CustomResourceOptions): ConnectionPostgres;
    /**
     * Returns true if the given object is an instance of ConnectionPostgres.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionPostgres;
    /**
     * The AWS PrivateLink configuration for the Postgres database.
     */
    readonly awsPrivatelink: pulumi.Output<outputs.ConnectionPostgresAwsPrivatelink | undefined>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    readonly connectionPostgresId: pulumi.Output<string>;
    /**
     * The target Postgres database.
     */
    readonly database: pulumi.Output<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The Postgres database hostname.
     */
    readonly host: pulumi.Output<string>;
    /**
     * The identifier for the connection.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The Postgres database password.
     */
    readonly password: pulumi.Output<outputs.ConnectionPostgresPassword | undefined>;
    /**
     * The Postgres database port.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * The fully qualified name of the connection.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The SSH tunnel configuration for the Postgres database.
     */
    readonly sshTunnel: pulumi.Output<outputs.ConnectionPostgresSshTunnel | undefined>;
    /**
     * The client certificate for the Postgres database.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    readonly sslCertificate: pulumi.Output<outputs.ConnectionPostgresSslCertificate | undefined>;
    /**
     * The CA certificate for the Postgres database.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    readonly sslCertificateAuthority: pulumi.Output<outputs.ConnectionPostgresSslCertificateAuthority | undefined>;
    /**
     * The client key for the Postgres database.
     */
    readonly sslKey: pulumi.Output<outputs.ConnectionPostgresSslKey | undefined>;
    /**
     * The SSL mode for the Postgres database.
     */
    readonly sslMode: pulumi.Output<string | undefined>;
    /**
     * The Postgres database username.. Can be supplied as either free text using `text` or reference to a secret object using
     * `secret`.
     */
    readonly user: pulumi.Output<outputs.ConnectionPostgresUser>;
    /**
     * If the connection should wait for validation.
     */
    readonly validate: pulumi.Output<boolean | undefined>;
    /**
     * Create a ConnectionPostgres resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionPostgresArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionPostgres resources.
 */
export interface ConnectionPostgresState {
    /**
     * The AWS PrivateLink configuration for the Postgres database.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionPostgresAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionPostgresId?: pulumi.Input<string>;
    /**
     * The target Postgres database.
     */
    database?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The Postgres database hostname.
     */
    host?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The Postgres database password.
     */
    password?: pulumi.Input<inputs.ConnectionPostgresPassword>;
    /**
     * The Postgres database port.
     */
    port?: pulumi.Input<number>;
    /**
     * The fully qualified name of the connection.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the Postgres database.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionPostgresSshTunnel>;
    /**
     * The client certificate for the Postgres database.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionPostgresSslCertificate>;
    /**
     * The CA certificate for the Postgres database.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionPostgresSslCertificateAuthority>;
    /**
     * The client key for the Postgres database.
     */
    sslKey?: pulumi.Input<inputs.ConnectionPostgresSslKey>;
    /**
     * The SSL mode for the Postgres database.
     */
    sslMode?: pulumi.Input<string>;
    /**
     * The Postgres database username.. Can be supplied as either free text using `text` or reference to a secret object using
     * `secret`.
     */
    user?: pulumi.Input<inputs.ConnectionPostgresUser>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ConnectionPostgres resource.
 */
export interface ConnectionPostgresArgs {
    /**
     * The AWS PrivateLink configuration for the Postgres database.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionPostgresAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionPostgresId?: pulumi.Input<string>;
    /**
     * The target Postgres database.
     */
    database: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The Postgres database hostname.
     */
    host: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The Postgres database password.
     */
    password?: pulumi.Input<inputs.ConnectionPostgresPassword>;
    /**
     * The Postgres database port.
     */
    port?: pulumi.Input<number>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the Postgres database.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionPostgresSshTunnel>;
    /**
     * The client certificate for the Postgres database.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionPostgresSslCertificate>;
    /**
     * The CA certificate for the Postgres database.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionPostgresSslCertificateAuthority>;
    /**
     * The client key for the Postgres database.
     */
    sslKey?: pulumi.Input<inputs.ConnectionPostgresSslKey>;
    /**
     * The SSL mode for the Postgres database.
     */
    sslMode?: pulumi.Input<string>;
    /**
     * The Postgres database username.. Can be supplied as either free text using `text` or reference to a secret object using
     * `secret`.
     */
    user: pulumi.Input<inputs.ConnectionPostgresUser>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
