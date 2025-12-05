import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * The specific availability zones of the cluster.
     */
    readonly availabilityZones: pulumi.Output<string[]>;
    readonly clusterId: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    readonly disk: pulumi.Output<boolean>;
    /**
     * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is updated.
     */
    readonly identifyByName: pulumi.Output<boolean | undefined>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    readonly introspectionDebugging: pulumi.Output<boolean | undefined>;
    /**
     * The interval at which to collect introspection data.
     */
    readonly introspectionInterval: pulumi.Output<string | undefined>;
    /**
     * The identifier for the cluster.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The number of replicas of each dataflow-powered object to maintain.
     */
    readonly replicationFactor: pulumi.Output<number>;
    /**
     * Defines the scheduling parameters for the cluster.
     */
    readonly scheduling: pulumi.Output<outputs.ClusterScheduling | undefined>;
    /**
     * The size of the managed cluster.
     */
    readonly size: pulumi.Output<string | undefined>;
    /**
     * Defines the parameters for the WAIT UNTIL READY options
     */
    readonly waitUntilReady: pulumi.Output<outputs.ClusterWaitUntilReady | undefined>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * The specific availability zones of the cluster.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    clusterId?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    disk?: pulumi.Input<boolean>;
    /**
     * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is updated.
     */
    identifyByName?: pulumi.Input<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    introspectionDebugging?: pulumi.Input<boolean>;
    /**
     * The interval at which to collect introspection data.
     */
    introspectionInterval?: pulumi.Input<string>;
    /**
     * The identifier for the cluster.
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
     * The number of replicas of each dataflow-powered object to maintain.
     */
    replicationFactor?: pulumi.Input<number>;
    /**
     * Defines the scheduling parameters for the cluster.
     */
    scheduling?: pulumi.Input<inputs.ClusterScheduling>;
    /**
     * The size of the managed cluster.
     */
    size?: pulumi.Input<string>;
    /**
     * Defines the parameters for the WAIT UNTIL READY options
     */
    waitUntilReady?: pulumi.Input<inputs.ClusterWaitUntilReady>;
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The specific availability zones of the cluster.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    clusterId?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
     *
     * @deprecated Deprecated
     */
    disk?: pulumi.Input<boolean>;
    /**
     * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is updated.
     */
    identifyByName?: pulumi.Input<boolean>;
    /**
     * Whether to introspect the gathering of the introspection data.
     */
    introspectionDebugging?: pulumi.Input<boolean>;
    /**
     * The interval at which to collect introspection data.
     */
    introspectionInterval?: pulumi.Input<string>;
    /**
     * The identifier for the cluster.
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
     * The number of replicas of each dataflow-powered object to maintain.
     */
    replicationFactor?: pulumi.Input<number>;
    /**
     * Defines the scheduling parameters for the cluster.
     */
    scheduling?: pulumi.Input<inputs.ClusterScheduling>;
    /**
     * The size of the managed cluster.
     */
    size?: pulumi.Input<string>;
    /**
     * Defines the parameters for the WAIT UNTIL READY options
     */
    waitUntilReady?: pulumi.Input<inputs.ClusterWaitUntilReady>;
}
