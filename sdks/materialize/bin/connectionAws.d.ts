import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ConnectionAws extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionAws resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionAwsState, opts?: pulumi.CustomResourceOptions): ConnectionAws;
    /**
     * Returns true if the given object is an instance of ConnectionAws.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionAws;
    /**
     * The access key ID to connect with.. Can be supplied as either free text using `text` or reference to a secret object
     * using `secret`.
     */
    readonly accessKeyId: pulumi.Output<outputs.ConnectionAwsAccessKeyId | undefined>;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to assume.
     */
    readonly assumeRoleArn: pulumi.Output<string | undefined>;
    /**
     * The session name to use when assuming the role.
     */
    readonly assumeRoleSessionName: pulumi.Output<string | undefined>;
    /**
     * The AWS region to connect to.
     */
    readonly awsRegion: pulumi.Output<string | undefined>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    readonly connectionAwsId: pulumi.Output<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * Override the default AWS endpoint URL.
     */
    readonly endpoint: pulumi.Output<string | undefined>;
    /**
     * The external ID used for trust relationship when assume_role_arn is specified. This is a read-only attribute that is
     * automatically generated.
     */
    readonly externalId: pulumi.Output<string>;
    /**
     * The identifier for the connection.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
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
     * The secret access key corresponding to the specified access key ID.
     */
    readonly secretAccessKey: pulumi.Output<outputs.ConnectionAwsSecretAccessKey | undefined>;
    /**
     * The session token corresponding to the specified access key ID.. Can be supplied as either free text using `text` or
     * reference to a secret object using `secret`.
     */
    readonly sessionToken: pulumi.Output<outputs.ConnectionAwsSessionToken | undefined>;
    /**
     * If the connection should wait for validation.
     */
    readonly validate: pulumi.Output<boolean | undefined>;
    /**
     * Create a ConnectionAws resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConnectionAwsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionAws resources.
 */
export interface ConnectionAwsState {
    /**
     * The access key ID to connect with.. Can be supplied as either free text using `text` or reference to a secret object
     * using `secret`.
     */
    accessKeyId?: pulumi.Input<inputs.ConnectionAwsAccessKeyId>;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to assume.
     */
    assumeRoleArn?: pulumi.Input<string>;
    /**
     * The session name to use when assuming the role.
     */
    assumeRoleSessionName?: pulumi.Input<string>;
    /**
     * The AWS region to connect to.
     */
    awsRegion?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionAwsId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Override the default AWS endpoint URL.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The external ID used for trust relationship when assume_role_arn is specified. This is a read-only attribute that is
     * automatically generated.
     */
    externalId?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
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
     * The secret access key corresponding to the specified access key ID.
     */
    secretAccessKey?: pulumi.Input<inputs.ConnectionAwsSecretAccessKey>;
    /**
     * The session token corresponding to the specified access key ID.. Can be supplied as either free text using `text` or
     * reference to a secret object using `secret`.
     */
    sessionToken?: pulumi.Input<inputs.ConnectionAwsSessionToken>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ConnectionAws resource.
 */
export interface ConnectionAwsArgs {
    /**
     * The access key ID to connect with.. Can be supplied as either free text using `text` or reference to a secret object
     * using `secret`.
     */
    accessKeyId?: pulumi.Input<inputs.ConnectionAwsAccessKeyId>;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to assume.
     */
    assumeRoleArn?: pulumi.Input<string>;
    /**
     * The session name to use when assuming the role.
     */
    assumeRoleSessionName?: pulumi.Input<string>;
    /**
     * The AWS region to connect to.
     */
    awsRegion?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionAwsId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Override the default AWS endpoint URL.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The secret access key corresponding to the specified access key ID.
     */
    secretAccessKey?: pulumi.Input<inputs.ConnectionAwsSecretAccessKey>;
    /**
     * The session token corresponding to the specified access key ID.. Can be supplied as either free text using `text` or
     * reference to a secret object using `secret`.
     */
    sessionToken?: pulumi.Input<inputs.ConnectionAwsSessionToken>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
