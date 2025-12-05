import * as pulumi from "@pulumi/pulumi";
export declare class Secret extends pulumi.CustomResource {
    /**
     * Get an existing Secret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretState, opts?: pulumi.CustomResourceOptions): Secret;
    /**
     * Returns true if the given object is an instance of Secret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Secret;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The identifier for the secret database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The identifier for the secret.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The fully qualified name of the secret.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the secret schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    readonly secretId: pulumi.Output<string>;
    /**
     * The value for the secret. The value expression may not reference any relations, and must be a bytea string literal. Use<span pulumi-lang-nodejs=" valueWo " pulumi-lang-dotnet=" ValueWo " pulumi-lang-go=" valueWo " pulumi-lang-python=" value_wo " pulumi-lang-yaml=" valueWo " pulumi-lang-java=" valueWo "> value_wo </span>for write-only ephemeral values that won't be stored in state.
     */
    readonly value: pulumi.Output<string | undefined>;
    readonly valueWo: pulumi.Output<string | undefined>;
    /**
     * Version number for the write-only value. Increment this to trigger an update of the secret value when using value_wo. Must be used with value_wo.
     */
    readonly valueWoVersion: pulumi.Output<number | undefined>;
    /**
     * Create a Secret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecretArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Secret resources.
 */
export interface SecretState {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the secret database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the secret.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The fully qualified name of the secret.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the secret schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    secretId?: pulumi.Input<string>;
    /**
     * The value for the secret. The value expression may not reference any relations, and must be a bytea string literal. Use<span pulumi-lang-nodejs=" valueWo " pulumi-lang-dotnet=" ValueWo " pulumi-lang-go=" valueWo " pulumi-lang-python=" value_wo " pulumi-lang-yaml=" valueWo " pulumi-lang-java=" valueWo "> value_wo </span>for write-only ephemeral values that won't be stored in state.
     */
    value?: pulumi.Input<string>;
    valueWo?: pulumi.Input<string>;
    /**
     * Version number for the write-only value. Increment this to trigger an update of the secret value when using value_wo. Must be used with value_wo.
     */
    valueWoVersion?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the secret database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the secret.
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
     * The identifier for the secret schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    secretId?: pulumi.Input<string>;
    /**
     * The value for the secret. The value expression may not reference any relations, and must be a bytea string literal. Use<span pulumi-lang-nodejs=" valueWo " pulumi-lang-dotnet=" ValueWo " pulumi-lang-go=" valueWo " pulumi-lang-python=" value_wo " pulumi-lang-yaml=" valueWo " pulumi-lang-java=" valueWo "> value_wo </span>for write-only ephemeral values that won't be stored in state.
     */
    value?: pulumi.Input<string>;
    valueWo?: pulumi.Input<string>;
    /**
     * Version number for the write-only value. Increment this to trigger an update of the secret value when using value_wo. Must be used with value_wo.
     */
    valueWoVersion?: pulumi.Input<number>;
}
