import * as pulumi from "@pulumi/pulumi";
export declare class ConnectionGrantDefaultPrivilege extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionGrantDefaultPrivilege resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionGrantDefaultPrivilegeState, opts?: pulumi.CustomResourceOptions): ConnectionGrantDefaultPrivilege;
    /**
     * Returns true if the given object is an instance of ConnectionGrantDefaultPrivilege.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionGrantDefaultPrivilege;
    readonly connectionGrantDefaultPrivilegeId: pulumi.Output<string>;
    /**
     * The default privilege will apply only to objects created in this database, if specified.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
     */
    readonly granteeName: pulumi.Output<string>;
    /**
     * The privilege to grant to the object.
     */
    readonly privilege: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The default privilege will apply only to objects created in this schema, if specified.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The default privilege will apply to objects created by this role. If this is left blank, then the current role is assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
     */
    readonly targetRoleName: pulumi.Output<string>;
    /**
     * Create a ConnectionGrantDefaultPrivilege resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionGrantDefaultPrivilegeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionGrantDefaultPrivilege resources.
 */
export interface ConnectionGrantDefaultPrivilegeState {
    connectionGrantDefaultPrivilegeId?: pulumi.Input<string>;
    /**
     * The default privilege will apply only to objects created in this database, if specified.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
     */
    granteeName?: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The default privilege will apply only to objects created in this schema, if specified.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The default privilege will apply to objects created by this role. If this is left blank, then the current role is assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
     */
    targetRoleName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ConnectionGrantDefaultPrivilege resource.
 */
export interface ConnectionGrantDefaultPrivilegeArgs {
    connectionGrantDefaultPrivilegeId?: pulumi.Input<string>;
    /**
     * The default privilege will apply only to objects created in this database, if specified.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The role name that will gain the default privilege. Use the `PUBLIC` pseudo-role to grant privileges to all roles.
     */
    granteeName: pulumi.Input<string>;
    /**
     * The privilege to grant to the object.
     */
    privilege: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The default privilege will apply only to objects created in this schema, if specified.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The default privilege will apply to objects created by this role. If this is left blank, then the current role is assumed. Use the `PUBLIC` pseudo-role to target objects created by all roles.
     */
    targetRoleName: pulumi.Input<string>;
}
